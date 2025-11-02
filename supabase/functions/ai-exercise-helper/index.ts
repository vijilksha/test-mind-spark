import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { exerciseType, userCode, level, tool } = await req.json();
    console.log('AI Exercise Helper called:', { exerciseType, level, tool });

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    let systemPrompt = '';
    
    if (exerciseType === 'validate') {
      systemPrompt = `You are an expert testing automation instructor specializing in ${tool}.
Your task is to review the user's ${tool} code and provide:
1. Code correctness analysis
2. Best practices feedback
3. Suggestions for improvement
4. AI-specific enhancements they could add
5. Next steps to advance their skills

Be encouraging but thorough. Provide specific examples when suggesting improvements.`;
    } else if (exerciseType === 'hint') {
      systemPrompt = `You are a helpful ${tool} testing instructor.
Provide a helpful hint for this ${level} level exercise without giving away the complete solution.
Guide them toward the right approach using best practices for ${tool}.`;
    } else if (exerciseType === 'generate') {
      systemPrompt = `You are an expert in ${tool} test automation.
Generate a complete, working ${tool} test script for the ${level} level.
Include:
1. Proper setup and imports
2. Clear comments explaining each section
3. Best practices
4. AI-powered enhancements where applicable
5. Error handling

Make it educational and production-ready.`;
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userCode || 'Generate exercise solution' }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted. Please add credits to your workspace.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in ai-exercise-helper:', error);
    const errorMessage = error instanceof Error ? error.message : 'An error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});