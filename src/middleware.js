
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware() { },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (req.nextUrl.pathname === '/admindashboard') {
          console.log(token)
          return token?.isAdmin
        }
      }
    }
  })
export const config = {
  matcher: ["/admindashboard", "/verify/:path*"],
};
