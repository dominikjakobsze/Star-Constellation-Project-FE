import React from "react";
import { BASE_URL } from "../constants";
import SpaceItem from "./SpaceItem";

export const STARS_TYPE = 'stars'
export const CONSTELLATIONS_TYPE = 'constellations'


const SpaceManagement = ({ collectionType }) => {


  const [collectionItem, setCollectionItem] = React.useState([]);
  const [file, setFile] = React.useState({
    file: '',
    value: ''
  });
  const [itemParameters, setItemParameters] = React.useState({
    description: '',
    id: '',
    name: ''

  });

  const fetchAllItems = async () => {
    try {
      const response = await fetch(BASE_URL + '/' + collectionType);
      const data = await response.json();
      setCollectionItem((prev) => data);
    } catch (error) {
      console.log(error);
    }
  };

  const addNewItem = async () => {
    try {
      const data = new FormData();
      data.append('name', itemParameters.name);
      data.append('description', itemParameters.description);
      data.append('image', file.file);
      const requestOptions = {
        method: 'POST',
        body: data
      };
      await fetch(BASE_URL + '/' + collectionType, requestOptions);
      fetchAllItems();
      setItemParameters({
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

  const editItem = async () => {
    try {
      const data = new FormData();
      if (itemParameters.name !== '') data.append('name', itemParameters.name);
      if (itemParameters.description !== '') data.append('description', itemParameters.description);
      if (file.file !== '') data.append('image', file.file);
      console.log(itemParameters.name, '/', itemParameters.description, '/', file.file)
      const requestOptions = {
        method: 'PATCH',
        body: data
      };
      await fetch(BASE_URL + '/' + collectionType + '/' + itemParameters.id, requestOptions);
      fetchAllItems();
      setItemParameters({
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

  const removeItem = async () => {
    try {
      console.log(itemParameters.id)
      const requestOptions = {
        method: 'DELETE'
      };
      await fetch(BASE_URL + '/' + collectionType + '/' + itemParameters.id, requestOptions);
      fetchAllItems();
      setItemParameters({
        description: '',
        id: '',
        name: ''
      });
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    fetchAllItems();
  }, []);

  return (<>
    <div className="w-full h-full max-w-screen bg-gray-900 flex flex-col flex-wrap items-center justify-start" style={{ minHeight: '100vh' }}>
      <div className="w-full h-full max-w-[1920px] mt-5 p-5 grid grid-cols-1 gap-5">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full flex flex-col flex-wrap gap-5">
            <h1 className="w-full text-violet-400 font-bold text-xl text-center">{String(collectionType).charAt(0).toUpperCase() + collectionType.slice(1)} Selector</h1>
            <div className="w-full flex flex-col flex-wrap border-2 border-indigo-900 p-3 rounded-lg mh-75 overflow-x-hidden overflow-y-auto">
              {collectionItem.status_code !== 200 && collectionItem.status_code !== 201 && !collectionItem.error
                ? (
                  <p className="w-full text-center text-base font-medium text-indigo-900">Coś poszło nie tak</p>
                )
                : (
                  collectionType === STARS_TYPE && collectionItem.stars_array.length === 0 || collectionType === CONSTELLATIONS_TYPE && collectionItem.constellations_array.length === 0
                    ? (<p className="w-full text-center text-base font-medium text-indigo-900">0 {collectionType}</p>)
                    : (
                      <div className="w-full grid grid-cols-1 gap-3">
                        {collectionType === STARS_TYPE
                          ? collectionItem.stars_array.map((item) => <SpaceItem item={item} itemParameters={itemParameters} setItemParameters={setItemParameters} key={item.id + item.name + item.linkToImage} />)
                          : collectionItem.constellations_array.map((item) => <SpaceItem item={item} itemParameters={itemParameters} setItemParameters={setItemParameters} key={item.id + item.name + item.linkToImage} />)}
                      </div>
                    ))}
            </div>
          </div>
          <div className="w-full flex flex-col flex-wrap gap-5">
            <h1 className="w-full text-violet-400 font-bold text-xl text-center">Managment Panel</h1>
            <div className="w-full flex flex-col flex-wrap border-2 border-indigo-900 p-3 rounded-lg max-h-[400px] overflow-x-hidden overflow-y-auto">
              <input className="w-full flex flex-col flex-wrap border-2 border-indigo-900 p-3 rounded-lg  overflow-x-hidden overflow-y-auto" value={itemParameters.id} onChange={e => setItemParameters(prev => ({ ...prev, id: e.target.value }))} placeholder='id'></input>
              <input className="w-full flex flex-col flex-wrap border-2 border-indigo-900 p-3 rounded-lg  overflow-x-hidden overflow-y-auto" value={itemParameters.name} onChange={e => setItemParameters(prev => ({ ...prev, name: e.target.value }))} placeholder='nazwa'></input>
              <input className="w-full flex flex-col flex-wrap border-2 border-indigo-900 p-3 rounded-lg  overflow-x-hidden overflow-y-auto" value={itemParameters.description} onChange={e => setItemParameters(prev => ({ ...prev, description: e.target.value }))} placeholder='opis'></input>
              <input className="w-full flex flex-col flex-wrap border-2 border-indigo-900 p-3 rounded-lg  overflow-x-hidden overflow-y-auto" value={file.value} type="file" style={{ color: '#fff' }} files={file.file} onChange={e => setFile((prev) => ({ file: e.target.files[0], value: e.target.value }))}></input>
              {itemParameters.id === ''
                ? (itemParameters.name !== '' && itemParameters.description !== '' && file.file !== ''
                  ? (<button className="w-full text-violet-400 font-bold text-xl text-center" onClick={addNewItem}>Dodaj</button>)
                  : ('')
                )
                : (itemParameters.name === '' && itemParameters.description === '' && file.file === ''
                  ? (<button className="w-full text-violet-400 font-bold text-xl text-center" onClick={removeItem}>Usuń</button>)
                  : (<button className="w-full text-violet-400 font-bold text-xl text-center" onClick={editItem}>Edytuj</button>)
                )
              }

            </div>
          </div>
        </div>
      </div>
    </div >
  </>)
};

export default SpaceManagement;