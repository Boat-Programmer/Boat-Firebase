import * as React from 'react'
import Head from 'next/head'

function Layout({ children }) {
    return (
      <React.Fragment>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          />
          <link rel="icon" href="/cloud.png" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
          <title>B Cloud</title>
        </Head>
        <div className="container-fluid">{children}</div>
        <div className="credit">
          🐳 Design by{" "}
          <a
            target="_blank"
            href="https://github.com/Boat-Programmer/Boat-Firebase"
          >
            Boat
          </a>
          {" "}  🐳
        </div>
      </React.Fragment>
    );
}

export default Layout