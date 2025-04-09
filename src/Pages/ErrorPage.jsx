import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";

import { buttonVariants, Empty, EmptyImage, EmptyTitle } from "keep-react";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Helmet>
        <title>Error | Tutor World</title>
        <link rel="canonical" href="/" />
      </Helmet>

      <Empty>
        <EmptyImage>
          <img
            src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg"
            height={234}
            width={350}
            alt="404"
          />
        </EmptyImage>
        <EmptyTitle className="mb-[14px] mt-5">
          {error.status} {error ? error.statusText : error.data}
        </EmptyTitle>
        <Link href="/" className={buttonVariants({ color: "primary" })}>
          Go to home
        </Link>
      </Empty>
    </div>
  );
};

export default ErrorPage;
