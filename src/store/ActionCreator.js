import { todoActions } from "./todo-slice";
const { ethers } = require("ethers");

export const fetchData = () => {

  const walletAddress = "0x432d71795c85b3bf6e82fea42fa218b9ebdd58ae";

  const walletAbi = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_id",
          type: "string",
        },
      ],
      name: "addList",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      name: "addTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "todoId",
          type: "string",
        },
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
      ],
      name: "deleteTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_id",
          type: "string",
        },
      ],
      name: "removeList",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "fallback",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "todoId",
          type: "string",
        },
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      name: "updateTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "address2ListIds",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "getTodos",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "id",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "id",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "isDone",
                  type: "bool",
                },
              ],
              internalType: "struct TodoLists.TodoItem[]",
              name: "todos",
              type: "tuple[]",
            },
          ],
          internalType: "struct TodoLists.TodoList[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getUserIds",
      outputs: [
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "id2TodoItems",
      outputs: [
        {
          internalType: "string",
          name: "id",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
        {
          internalType: "bool",
          name: "isDone",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "listIds",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      name: "listIds2exists",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "todoCnt",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "user2used",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "users",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  return async (dispatch) => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(walletAddress, walletAbi, signer);
    
    await provider.send("eth_requestAccounts", []);
    const obj = await contract.getTodos(
      "0x9Ad10f2a816a1e3dde84639baBedEdb534FD0604"
    );
    // console.log(obj);


    await dispatch(
      todoActions.replaceData({
        todos: obj || [],
      })
    );
  };
};

export const deleteData = (myDeleteData) => {
  const walletAddress = "0x432d71795c85b3bf6e82fea42fa218b9ebdd58ae";

  const walletAbi = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_id",
          type: "string",
        },
      ],
      name: "addList",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      name: "addTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "todoId",
          type: "string",
        },
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
      ],
      name: "deleteTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_id",
          type: "string",
        },
      ],
      name: "removeList",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "fallback",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "todoId",
          type: "string",
        },
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      name: "updateTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "address2ListIds",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "getTodos",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "id",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "id",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "isDone",
                  type: "bool",
                },
              ],
              internalType: "struct TodoLists.TodoItem[]",
              name: "todos",
              type: "tuple[]",
            },
          ],
          internalType: "struct TodoLists.TodoList[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getUserIds",
      outputs: [
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "id2TodoItems",
      outputs: [
        {
          internalType: "string",
          name: "id",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
        {
          internalType: "bool",
          name: "isDone",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "listIds",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      name: "listIds2exists",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "todoCnt",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "user2used",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "users",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  return async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(walletAddress, walletAbi, signer);
    await provider.send("eth_requestAccounts", []);
    if (myDeleteData[0]) {
      await contract.deleteTodo(myDeleteData[0].todoId, myDeleteData[0].listId);
    }
  };
};
export const removeList = (myRemoveList) => {
  const walletAddress = "0x432d71795c85b3bf6e82fea42fa218b9ebdd58ae";
  const walletAbi = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_id",
          type: "string",
        },
      ],
      name: "addList",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      name: "addTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "todoId",
          type: "string",
        },
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
      ],
      name: "deleteTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_id",
          type: "string",
        },
      ],
      name: "removeList",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "fallback",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "todoId",
          type: "string",
        },
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      name: "updateTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "address2ListIds",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "getTodos",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "id",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "id",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "isDone",
                  type: "bool",
                },
              ],
              internalType: "struct TodoLists.TodoItem[]",
              name: "todos",
              type: "tuple[]",
            },
          ],
          internalType: "struct TodoLists.TodoList[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getUserIds",
      outputs: [
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "id2TodoItems",
      outputs: [
        {
          internalType: "string",
          name: "id",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
        {
          internalType: "bool",
          name: "isDone",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "listIds",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      name: "listIds2exists",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "todoCnt",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "user2used",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "users",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  return async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(walletAddress, walletAbi, signer);
    await provider.send("eth_requestAccounts", []);
    if (myRemoveList[0]) {
      await contract.removeList(myRemoveList[0].listId);
    }
  };
};

export const sendData = (data) => {
  const walletAddress = "0x432d71795c85b3bf6e82fea42fa218b9ebdd58ae";

  const walletAbi = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_id",
          type: "string",
        },
      ],
      name: "addList",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      name: "addTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "todoId",
          type: "string",
        },
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
      ],
      name: "deleteTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_id",
          type: "string",
        },
      ],
      name: "removeList",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "fallback",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "todoId",
          type: "string",
        },
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      name: "updateTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "address2ListIds",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "getTodos",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "id",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "id",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "isDone",
                  type: "bool",
                },
              ],
              internalType: "struct TodoLists.TodoItem[]",
              name: "todos",
              type: "tuple[]",
            },
          ],
          internalType: "struct TodoLists.TodoList[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getUserIds",
      outputs: [
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "id2TodoItems",
      outputs: [
        {
          internalType: "string",
          name: "id",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
        {
          internalType: "bool",
          name: "isDone",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "listIds",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      name: "listIds2exists",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "todoCnt",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "user2used",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "users",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  return async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(walletAddress, walletAbi, signer);
    await provider.send("eth_requestAccounts", []);
    if (data[0]) {
      await contract.addTodo(
        data[0].listId,
        data[0].title,
        data[0].description
      );
    }
  };
};

export const sendList = (newListId) => {
  const walletAddress = "0x432d71795c85b3bf6e82fea42fa218b9ebdd58ae";

  const walletAbi = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_id",
          type: "string",
        },
      ],
      name: "addList",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      name: "addTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "todoId",
          type: "string",
        },
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
      ],
      name: "deleteTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_id",
          type: "string",
        },
      ],
      name: "removeList",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "fallback",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "todoId",
          type: "string",
        },
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      name: "updateTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "address2ListIds",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "getTodos",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "id",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "id",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "isDone",
                  type: "bool",
                },
              ],
              internalType: "struct TodoLists.TodoItem[]",
              name: "todos",
              type: "tuple[]",
            },
          ],
          internalType: "struct TodoLists.TodoList[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getUserIds",
      outputs: [
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "id2TodoItems",
      outputs: [
        {
          internalType: "string",
          name: "id",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
        {
          internalType: "bool",
          name: "isDone",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "listIds",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      name: "listIds2exists",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "todoCnt",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "user2used",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "users",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  return async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(walletAddress, walletAbi, signer);
    await provider.send("eth_requestAccounts", []);

    if (newListId[0]) {
      await contract.addList(newListId[0].listId);
    }
    console.log('yes');

  };
};

export const updateData = (myUpdateData) => {
  const walletAddress = "0x432d71795c85b3bf6e82fea42fa218b9ebdd58ae";

  const walletAbi = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_id",
          type: "string",
        },
      ],
      name: "addList",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      name: "addTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "todoId",
          type: "string",
        },
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
      ],
      name: "deleteTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_id",
          type: "string",
        },
      ],
      name: "removeList",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "fallback",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "todoId",
          type: "string",
        },
        {
          internalType: "string",
          name: "listid",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      name: "updateTodo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "address2ListIds",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "getTodos",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "id",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "id",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "isDone",
                  type: "bool",
                },
              ],
              internalType: "struct TodoLists.TodoItem[]",
              name: "todos",
              type: "tuple[]",
            },
          ],
          internalType: "struct TodoLists.TodoList[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getUserIds",
      outputs: [
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "id2TodoItems",
      outputs: [
        {
          internalType: "string",
          name: "id",
          type: "string",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
        {
          internalType: "bool",
          name: "isDone",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "listIds",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      name: "listIds2exists",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "todoCnt",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "user2used",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "users",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  return async (dispatch) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(walletAddress, walletAbi, signer);
    await provider.send("eth_requestAccounts", []);
    console.log("bahar");
    console.log(myUpdateData);

    if (myUpdateData[0]) {
      await contract.updateTodo(
        myUpdateData[0].todoId,
        myUpdateData[0].listId,
        myUpdateData[0].title,
        myUpdateData[0].description
      );
      console.log("andar");
    }

    const obj = await contract.getTodos(
      "0x9Ad10f2a816a1e3dde84639baBedEdb534FD0604"
    );

    await dispatch(
      todoActions.replaceData({
        todos: obj || [],
      })
    );
  };
};
