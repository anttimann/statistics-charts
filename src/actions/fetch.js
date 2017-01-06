import 'whatwg-fetch';

async function asyncFetch(url='/') {
  try {
    const response = await fetch(url);
    return await response.json();
  }
  catch (err) {
    throw new Error(err);
  }
}

export {
  asyncFetch
};
