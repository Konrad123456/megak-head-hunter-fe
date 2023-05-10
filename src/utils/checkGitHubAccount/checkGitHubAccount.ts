
export const checkGitHubAccount =async (userName:string)=>{
    const response = await fetch(`https://github.com/${userName}.png`)
    console.log(response)
}