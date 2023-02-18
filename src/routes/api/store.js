import { writable, derived } from 'svelte/store';



/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/


/**
 Ignore the error it works flawlessly
 **/
export const apiData = writable({});



export const movieName = derived(apiData, $apiData => {
  return $apiData.Title ? $apiData.Title : '';
  
});

export const movieYear = derived(apiData, $apiData => {
    return $apiData.Year ? $apiData.Year : '';
    
  });

  export const moviePG = derived(apiData, $apiData => {
    return $apiData.Rated ? $apiData.Rated : '';
    
  });


  export const moviePoster = derived(apiData, $apiData => {
    return $apiData.Poster ? $apiData.Poster : '';
    
  });


  export const movieTime = derived(apiData, $apiData => {
    return $apiData.Runtime ? $apiData.Runtime : '';
    
  });

  export const moviePlot = derived(apiData, $apiData => {
    return $apiData.Plot ? $apiData.Plot : '';
    
  });



  export const movieDirector = derived(apiData, $apiData => {
    return $apiData.Director ? $apiData.Director : '';
    
  });


  export const movieLenguaje = derived(apiData, $apiData => {
    return $apiData.Language ? $apiData.Language : '';
    
  });