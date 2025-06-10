import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 简化 matcher 配置
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}

export default function middleware(request: NextRequest) {
  // 简单地返回下一个响应
  return NextResponse.next()
} 