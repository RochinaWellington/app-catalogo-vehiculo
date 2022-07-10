import app from './app.js'

const PORT=3000
async function main(){


  app.listen(process.env.PORT ||PORT)
  console.log('Server is running on port',PORT)

}

main()