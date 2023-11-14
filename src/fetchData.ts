const api_url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json'
async function fetchData() {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
  }

export default fetchData;