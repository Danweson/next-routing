import prisma from '../../lib/prisma';

function BlogId({post}) {

    
    return (
        <>
        
            <h1>Post Details</h1>
            <div className="row gy-5" key={post.id}>
                <div className="col-6">
                    <div className="p-3 border bg-light"> Titre: {post.title} </div>
                </div>
                <div className="col-6">
                    <h3>Description</h3>
                    <div className="p-3 border bg-light"> {post.content} </div>
                </div>
                <div className="col-6 mt-3"><br/>
                    <div className="p-3 border bg-light">Rédigé par: {post.author.name} </div>
                </div>
            </div>
        </>
    )
}

export default BlogId
// export async function getStaticPaths(){

//     const response = await fetch(
//         "http://localhost:5000/cv",
//         {
//             headers: {
//             Accept: 'application/json, text/plain, */*',
//             'User-Agent': '*',
//             Authorization: `Bearer ${AUTHENTICATION.BEARER_T0KEN}`
//             },
//         }
//     )

//     const data = await response.json()

//     const paths = data.map((cv) => {
//         return {
//             params : {
//                cvId: `${cv.id}`,
//             },
//         }
//     })

//     return {
//         paths: paths,
//         fallback: true,
//     }
// }

export async function getServerSideProps(context){

    const { params } = context

    const post = await prisma.post.findUnique({

        where: {
    
          id: String(params?.blogId),
    
        },
    
        include: {
    
          author: {
    
            select: { name: true },
    
          },
    
        },
    
      });
    
      return {
        props:{
            post: post,
        }
      };
}