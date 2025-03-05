const { NextResponse } = require("next/server");

export async function GET(req, res) {
  console.log("Blog get hit!!");
  return NextResponse.json({ msg: "API wotking" });
}
