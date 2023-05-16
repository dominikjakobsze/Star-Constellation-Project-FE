import React from "react";
import { IMAGE_BASE_URL, BASE_URL } from "../constants";

const StarManagement = () => {

  const [stars, setStars] = React.useState([]);
  const [file, setFile] = React.useState({
    file: '',
    value: ''
  });
  const [starParameters, setStarParameters] = React.useState({
    description: '',
    id: '',
    name: ''

  });

  const fetchAllStars = async () => {
    try {
      const response = await fetch(BASE_URL + '/stars');
      const data = await response.json();
      setStars((prev) => data);
    } catch (error) {
      console.log(error);
    }
  };

  const addNewStar = async () => {
    try {
      const data = new FormData();
      data.append('name', starParameters.name);
      data.append('description', starParameters.description);
      data.append('image', file.file);
      console.log(starParameters.name, '/', starParameters.description, '/', file.file)
      const requestOptions = {
        method: 'POST',
        body: data
      };
      await fetch(BASE_URL + '/stars', requestOptions);
      fetchAllStars();
      setStarParameters({
        description: '',
        id: '',
        name: ''
      });
      setFile({
        file: '',
        value: ''
      });
    } catch (error) {
      console.log(error)
    }
  }

  const editStar = async () => {
    try {
      const data = new FormData();
      if (starParameters.name !== '') data.append('name', starParameters.name);
      if (starParameters.description !== '') data.append('description', starParameters.description);
      if (file.file !== '') data.append('image', file.file);
      console.log(starParameters.name, '/', starParameters.description, '/', file.file)
      const requestOptions = {
        method: 'PATCH',
        body: data
      };
      await fetch(BASE_URL + '/stars/' + starParameters.id, requestOptions);
      fetchAllStars();
      setStarParameters({
        description: '',
        id: '',
        name: ''
      });
      setFile({
        file: '',
        value: ''
      });
    } catch (error) {
      console.log(error)
    }
  }

  const removeStar = async () => {
    try {
      console.log(starParameters.id)
      const requestOptions = {
        method: 'DELETE'
      };
      await fetch(BASE_URL + '/stars/' + starParameters.id, requestOptions);
      fetchAllStars();
      setStarParameters({
        description: '',
        id: '',
        name: ''
      });
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    fetchAllStars();
  }, []);

  return (<>
    <div className="w-full h-full max-w-screen bg-gray-900 flex flex-col flex-wrap items-center justify-start" style={{ minHeight: '100vh' }}>
      <div className="w-full h-full max-w-[1920px] mt-5 p-5 grid grid-cols-1 gap-5">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full flex flex-col flex-wrap gap-5">
            <h1 className="w-full text-violet-400 font-bold text-xl text-center">Star Selector</h1>
            <div className="w-full flex flex-col flex-wrap border-2 border-indigo-900 p-3 rounded-lg mh-75 overflow-x-hidden overflow-y-auto">
              {stars.status_code !== 200 && stars.status_code !== 201 && !stars.error
                ? (
                  <p className="w-full text-center text-base font-medium text-indigo-900">Coś poszło nie tak</p>
                )
                : (
                  stars.stars_array.length === 0
                    ? (<p className="w-full text-center text-base font-medium text-indigo-900">0 Stars</p>)
                    : (
                      <div className="w-full grid grid-cols-1 gap-3">
                        {stars.stars_array.map((star) => (
                          (starParameters.id === '' || starParameters.id == star.id ? (
                            <div key={star.id + star.name + star.linkToImage}>
                              <div
                                onClick={() => setStarParameters((prev) => ({ ...prev, id: star.id }))}
                                className="w-full py-2 px-1 cursor-pointer hover:bg-indigo-900 items-center justify-center flex flex-row flex-nowrap gap-5 font-semibold text-violet-400">
                                <p>{star.id}:</p>
                                <p className="truncate">{star.name}</p>
                                <img src={IMAGE_BASE_URL + star.linkToImage} alt={star.name} className="w-10 h-10" />

                              </div>
                              {starParameters.id == star.id ? (
                                <div
                                  className="w-full py-2 px-1 cursor-pointer hover:bg-indigo-900 items-center justify-center flex flex-row flex-nowrap gap-5 font-semibold text-violet-400">
                                  <p>{star.description}</p>
                                </div>)
                                : ('')}
                            </div>) : '')

                        ))}
                      </div>
                    ))}
            </div>
          </div>
          <div className="w-full flex flex-col flex-wrap gap-5">
            <h1 className="w-full text-violet-400 font-bold text-xl text-center">Managment Panel</h1>
            <div className="w-full flex flex-col flex-wrap border-2 border-indigo-900 p-3 rounded-lg max-h-[400px] overflow-x-hidden overflow-y-auto">
              <input className="w-full flex flex-col flex-wrap border-2 border-indigo-900 p-3 rounded-lg  overflow-x-hidden overflow-y-auto" value={starParameters.id} onChange={e => setStarParameters(prev => ({ ...prev, id: e.target.value }))} placeholder='id'></input>
              <input className="w-full flex flex-col flex-wrap border-2 border-indigo-900 p-3 rounded-lg  overflow-x-hidden overflow-y-auto" value={starParameters.name} onChange={e => setStarParameters(prev => ({ ...prev, name: e.target.value }))} placeholder='nazwa'></input>
              <input className="w-full flex flex-col flex-wrap border-2 border-indigo-900 p-3 rounded-lg  overflow-x-hidden overflow-y-auto" value={starParameters.description} onChange={e => setStarParameters(prev => ({ ...prev, description: e.target.value }))} placeholder='opis'></input>
              <input className="w-full flex flex-col flex-wrap border-2 border-indigo-900 p-3 rounded-lg  overflow-x-hidden overflow-y-auto" value={file.value} type="file" style={{ color: '#fff' }} files={file.file} onChange={e => setFile((prev) => ({ file: e.target.files[0], value: e.target.value }))}></input>
              {starParameters.id === ''
                ? (starParameters.name !== '' && starParameters.description !== '' && file.file !== ''
                  ? (<button className="w-full text-violet-400 font-bold text-xl text-center" onClick={addNewStar}>Dodaj</button>)
                  : ('')
                )
                : (starParameters.name === '' && starParameters.description === '' && file.file === ''
                  ? (<button className="w-full text-violet-400 font-bold text-xl text-center" onClick={removeStar}>Usuń</button>)
                  : (<button className="w-full text-violet-400 font-bold text-xl text-center" onClick={editStar}>Edytuj</button>)
                )
              }

            </div>
          </div>
        </div>
      </div>
    </div >
  </>)
};

export default StarManagement;