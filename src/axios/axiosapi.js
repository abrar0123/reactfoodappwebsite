import axios from "axios";

// ******************* create operation *******************

const createItem = async (itemData) => {
  try {
    const response = await axios.post(
      "https://api.example.com/items",
      itemData
    );

    return response.data;
  } catch (error) {
    console.error("Error creating item:", error);
    throw error;
  }
};

// ******************* Read operation *******************

const getItems = async () => {
  try {
    const response = await axios.get("https://api.example.com/items");
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

// ******************* Update operation *******************

const updateItem = async (itemId, updatedItemData) => {
  try {
    const response = await axios.put(
      `https://api.example.com/items/${itemId}`,
      updatedItemData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating item:", error);
    throw error;
  }
};

// ******************* Delete operation *******************

const deleteItem = async (itemId) => {
  try {
    const response = await axios.delete(
      `https://api.example.com/items/${itemId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};
