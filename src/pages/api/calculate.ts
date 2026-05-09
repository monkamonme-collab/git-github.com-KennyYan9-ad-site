export const POST = async ({ request }) => {
  const data = await request.json();
  const { a, b } = data;

  if (typeof a !== 'number' || typeof b !== 'number') {
    return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400 });
  }

  return new Response(JSON.stringify({ result: a + b }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
