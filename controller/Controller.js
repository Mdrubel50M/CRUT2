
export async function Home(req,res){
 res.status(200).json('im from home Controller') 
}

export async function about(req, res){
    res.status(200).json("i am from about")
 }