// Write your code here!
// Display Posts 
function displayPosts(posts) {
    const postList = document.querySelector('#post-list');
    posts.forEach(post => {
        //Create a li tag
        const listItem = document.createElement("li");
        //Create a new h1 tag and add the title as the textContent
        const title = document.createElement("h1");
        title.textContent = post.title;
        //Create a new p tag and add the body as the textContent
        const body = document.createElement("p");
        body.textContent = post.body
        //Append h1 and p to li
        listItem.appendChild(title)
        listItem.appendChild(body)
        //Append li to the ul 
        postList.appendChild(listItem)
    });
}
// Refactor with async/await
async function fetchAndDisplayPosts() {
    try {
        const response = await
        fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error("Error:", error);
    }
}
//Run function 
fetchAndDisplayPosts()