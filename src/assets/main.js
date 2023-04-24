
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC3aj05GEEyzdOqYM5FLSFeg&part=snippet%2Cid&order=date&maxResults=8';
const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '41323a2705msh40e72decd5608dep10ab21jsn228dfcde9fa5',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData (urlApi){
 
    const respuesta = await fetch(urlApi, options);
    const data = await respuesta.json();
    return data;
    

}


(async ()=> {

    try {

        const videos = await  fetchData(API);
      
        let view = `
        ${videos.items.map(video=>`
            <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </h3>
            </div>
            </div>
        `).slice(0,4).join('')}
        `
      
        content.innerHTML = view    
      
    } catch (error) {
        console.log(error)
    }

})();
	

