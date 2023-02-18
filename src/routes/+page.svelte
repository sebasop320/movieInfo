<script>
    let search = '';
    import { apiData, movieName, movieYear, moviePG, moviePoster, movieDirector, moviePlot, movieTime, movieLenguaje } from './api/store.js';
    import { apiKey } from './secret/apiKey.json';
    //even if it says that the file ./secret/apiKey.json is not found it still works perfect!
    async function searchMovie() {
      const response = await fetch(`https://www.omdbapi.com/?t=${search}&apikey=${apiKey}`);
      const data = await response.json();
      console.log(data);
      apiData.set(data);
    }
  </script>

  <style>
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f2f2f2;
    }
  
    h1 {
      font-size: 36px;
      margin-bottom: 20px;
      color: #333333;
    }
  
    .search-input {
      font-size: 24px;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      margin-bottom: 20px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    }
  
    .search-button {
      font-size: 24px;
      padding: 10px 20px;
      background-color: #333333;
      color: #ffffff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
  
    .search-button:hover {
      background-color: #555555;
    }
  
    .movie-details {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .movie-poster {
      max-width: 400px;
      margin-top: 20px;
    }


    .footer {
    text-align: center;
    padding: 3px;
    color: #333333;
    }

    
  </style>
  
  <div class="container">
    <h1>Search for a movie</h1>
  
    <div>
      <input
        class="search-input"
        type="text"
        placeholder="Enter a movie title"
        bind:value={search}
        on:keyup={({key}) => key === "Enter" && searchMovie()}
      />
    </div>
  
    <button class="search-button" on:click={searchMovie}>Search</button>
  
    {#if $movieName}
      <div class="movie-details">
        <h2>{$movieName} ({$movieYear})</h2>
        <h3>{$moviePG} Time: ({$movieTime})</h3>
        <h3>Director: {$movieDirector} ({$moviePlot})</h3>
        <h3>Lenguaje: {$movieLenguaje}</h3>
        {#if $moviePoster}
          <img class="movie-poster" src={$moviePoster} alt="Movie Poster" />
        {/if}
      </div>
    {/if}


    <div class="footer">
        
        <footer>
            <p>Author: Sebasopdev<br>
                <a href="https://sebasopdev.com">Sebasopdev</a></p>
              
          </footer>
      </div>
  
  </div>