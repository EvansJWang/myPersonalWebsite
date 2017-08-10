import express from 'express';


app.listen(process.env.PORT ||  4000, () => console.log('listening on port 3000'));

app.get('*', (req, res) => {
  res.status(200).send("<html>
    <head>
      <title>Aaron Stack-Barnes</title>
      <style>body { margin: 0; }</style>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    </head>
    <body>
      <!-- When you're ready to deploy your app, update this line to point to your compiled client.bundle.js -->
      <script src="./client.bundle?platform=vr"></script>
      <script>
        // Initialize the React VR application
        ReactVR.init(
          // When you're ready to deploy your app, update this line to point to
          // your compiled index.bundle.js
          '../index.vr.bundle?platform=vr&dev=true',
          // Attach it to the body tag
          document.body
        );
      </script>
    </body>
  </html>
")

});
