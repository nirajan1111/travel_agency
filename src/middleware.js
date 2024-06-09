
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware() { },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (req.nextUrl.pathname === '/admin-dashboard') {

          return token?.isAdmin
        }
      }
    }
  })
export const config = {
  matcher: ["/admin-dashboard", "/verify/:path*","/admin-dashboard/:path*"],
};
