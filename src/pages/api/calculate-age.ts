export const POST = async ({ request }) => {
  const { type, age, size } = await request.json();
  
  let humanAge = 0;
  
  if (type === 'dog') {
    // 簡易換算邏輯：實際產品應更細緻
    humanAge = age * 7; 
  } else {
    // 貓咪換算邏輯
    humanAge = age * 4 + 15;
  }

  return new Response(JSON.stringify({ result: humanAge }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
