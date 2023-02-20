function Pokemon(props) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className='pokedex-wrapper'>
      <div className='pokedex-header'>
        <div className='pokedex-btn-group'>
          <div className='pokedex-btn btn-red'></div>
          <div className='pokedex-btn btn-yellow'></div>
          <div className='pokedex-btn btn-green'></div>
        </div>
        <div className='sensor-wrapper'>
          <div className='pokedex-sensor'></div>
        </div>
      </div>

      <div className='pokemon-info-wrapper'>
        <div className='pokemon-info'>
          <p className='pokemon-name'>
            {capitalizeFirstLetter(props.data.name)}
          </p>

          <div className='pokemon-type'>
            {props.data.types.map((pokeType) => {
              return (
                <p
                  className={`pokemon-types ${pokeType.type.name}`}
                  key={pokeType.slot}
                >
                  {pokeType.type.name.toUpperCase()}
                </p>
              );
            })}
          </div>

          <div>
            <p>Stats</p>
            {props.data.stats.map((statistic, index) => {
              return (
                <p key={index}>
                  {statistic.stat.name} - {statistic.base_stat}
                </p>
              );
            })}
          </div>
        </div>

        <div className='img-wrapper'>
          <img
            src={props.data.sprites.front_default}
            alt='pokemon sprite'
            width={200}
            height={200}
            className='pokemon-img'
          />
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
