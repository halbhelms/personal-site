import Head from 'next/head';

export default (props) => {
  return (
    <Head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>John Doe - UX Designer & Front End Developer</title>
    <meta name="description" content="" />
    <meta name="author" content="" />
    
    {/* <!-- Favicons */}
        {/* ================================================== --> */}
    <link rel="shortcut icon" href="static/img/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" href="static/img/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="static/img/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="static/img/apple-touch-icon-114x114.png" />
    
    {/* <!-- Bootstrap --> */}
    <link rel="stylesheet" type="text/css"  href="static/css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="static/fonts/font-awesome/css/font-awesome.css" />
    
    {/* <!-- Stylesheet */}
        {/* ================================================== --> */}
    <link rel="stylesheet" type="text/css"  href="static/css/style.css" />
    <link rel="stylesheet" type="text/css" href="static/css/prettyPhoto.css" />
    <link href='http://fonts.googleapis.com/css?family=Lato:400,700,900,300' rel='stylesheet' type='text/css' />
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800,600,300' rel='stylesheet' type='text/css' />
    <script type="text/javascript" src="static/js/modernizr.custom.js"></script>
    
    {/* <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// --> */}
    {/* <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]--> */}
    </Head>
  );
}