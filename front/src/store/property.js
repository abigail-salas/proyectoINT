import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProperties = createAsyncThunk(
  "GETALLPROPERTIES",
  async () => {
    try {
      const { data } = await axios.get("/api/properties");
      return data;
    } catch (error) {
      return [];
    }
  }
);

export const getPropertyByType = createAsyncThunk(
  "GETPROPERTYBYTYPE",
  (type) => {
    return axios.get(`/api/properties/type/${type}`).then((res) => res.data);
  }
);

export const getSelectedProperty = createAsyncThunk(
  "GETSELECTEDPROPERTY",
  (id) => {
    return axios.get(`/api/properties/id/${id}`).then((res) => res.data);
  }
);

export const getPropertyByState = createAsyncThunk(
  "GETPROPERTYBYSTATE",
  (state) => {
    return axios.get(`/api/properties/state/${state}`).then((res) => res.data);
  }
);

export const removeProperty = createAsyncThunk(
  "REMOVE_PROPERTY",
  (propId, thunkAPI) => {
    const { properties } = thunkAPI.getState();
    axios.delete(`/api/properties/${propId}`).then((res) => res.data);
    const newProperty = properties.filter((property) => {
      return property.id !== propId;
    });
    return newProperty;
  }
);
export const editProperty = createAsyncThunk(
  "EDIT_PROPERTY",
  ({ id, edit }) => {
    return axios.put(`/api/properties/${id}`, edit).then((res) => res.data);
  }
);

export const addProperty = createAsyncThunk("ADD_PROPERTY", (edit) => {
  console.log(edit);
  return axios.post(`/api/properties/`, edit).then((res) => res.data);
});
export const getPropertyByCategory = createAsyncThunk(
  "GETPROPERTYBYCATEGORY",
  (categotyId) => {
    return axios.get(`/api/category/${categotyId}`).then((res) => res.data);
  }
);

const initialState = [];

const propertyReducer = createReducer(initialState, {
  [getAllProperties.fulfilled]: (state, action) => action.payload,
  [getPropertyByType.fulfilled]: (state, action) => action.payload,
  [getPropertyByState.fulfilled]: (state, action) => action.payload,
  [editProperty.fulfilled]: (state, action) => [...state, action.payload],
  [removeProperty.fulfilled]: (state, action) => action.payload,
  [addProperty.fulfilled]: (state, action) => [...state, action.payload],
  [getPropertyByCategory.fulfilled]: (state, action) => action.payload,
  [getSelectedProperty.fulfilled]: (state, action) => action.payload,
});

export default propertyReducer;
