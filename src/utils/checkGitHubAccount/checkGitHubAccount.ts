
export const checkGitHubAccount =async (userName:string)=>{
    const response = await fetch(`https://api.github.com/users/${userName}`)
console.log(response)
 return  response.status
}