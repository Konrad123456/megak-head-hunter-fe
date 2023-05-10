
export const checkGitHubAccount =async (userName:string)=>{
    const response = await fetch(`https://api.github.com/users/${userName}`)
 return  response.status
}