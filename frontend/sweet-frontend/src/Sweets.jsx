import { useEffect, useState } from "react";
import axios from "axios";
import "./sweets.css";

function Sweets() {
  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const token = localStorage.getItem("token");

  // 🔓 Logout
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    if (!token) return;
    fetchSweets();
  }, []);

  const fetchSweets = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/sweets",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSweets(res.data);
    } catch (err) {
      console.error("Fetch sweets error:", err);
    }
  };

  const purchaseSweet = async (id) => {
    try {
      await axios.post(
        `http://localhost:3000/api/sweets/${id}/purchase`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchSweets();
    } catch (err) {
      console.error("Purchase error:", err);
    }
  };

  // 🔍 Filter logic
  const filteredSweets = sweets.filter((sweet) => {
    const matchesSearch = sweet.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category
      ? sweet.category === category
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="sweets-page">
      {/* 🔓 Logout */}
      <button
        onClick={logout}
        style={{
          background: "transparent",
          color: "#f4a6c1",
          border: "1px solid #f4a6c1",
          padding: "6px 14px",
          borderRadius: "20px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Logout
      </button>

      <h2 className="title">Our Sweets 🍬</h2>

      {/* 🔎 Search & Filter */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search sweets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Chocolate">Chocolate</option>
          <option value="Traditional">Traditional</option>
          <option value="Bakery">Bakery</option>
        </select>
      </div>

      {/* 🍬 Sweets Grid */}
      <div className="sweets-grid">
        {filteredSweets.map((sweet) => (
          <div key={sweet._id} className="sweet-card">
            <h3>{sweet.name}</h3>
            <p className="category">{sweet.category}</p>
            <p>₹{sweet.price}</p>
            <p className="qty">In stock: {sweet.quantity}</p>

            <button
              disabled={sweet.quantity === 0}
              onClick={() => purchaseSweet(sweet._id)}
            >
              {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sweets;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./sweets.css";

// function Sweets() {
//   const [sweets, setSweets] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");

//   // 🛠 Admin state
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     category: "Chocolate",
//     price: "",
//     quantity: "",
//   });

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetchSweets();

//     // 🔐 Check role from JWT (frontend-only)
//     const payload = JSON.parse(atob(token.split(".")[1]));
//     if (payload.role === "ADMIN") {
//       setIsAdmin(true);
//     }
//   }, []);

//   const fetchSweets = async () => {
//     const res = await axios.get(
//       "http://localhost:3000/api/sweets",
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     setSweets(res.data);
//   };

//   const purchaseSweet = async (id) => {
//     await axios.post(
//       `http://localhost:3000/api/sweets/${id}/purchase`,
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     fetchSweets();
//   };

//   // 🧁 Admin helpers
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const addSweet = async () => {
//     await axios.post(
//       "http://localhost:3000/api/sweets",
//       {
//         ...formData,
//         price: Number(formData.price),
//         quantity: Number(formData.quantity),
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     setFormData({
//       name: "",
//       category: "Chocolate",
//       price: "",
//       quantity: "",
//     });

//     fetchSweets();
//   };

//   const deleteSweet = async (id) => {
//     await axios.delete(
//       `http://localhost:3000/api/sweets/${id}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     fetchSweets();
//   };

//   // 🔍 FILTER LOGIC
//   const filteredSweets = sweets.filter((sweet) => {
//     const matchesSearch = sweet.name
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchesCategory = category
//       ? sweet.category === category
//       : true;

//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="sweets-page">
//       <h2 className="title">Our Sweets 🍬</h2>

//       {/* 🛠 Admin Panel */}
//       {isAdmin && (
//         <div className="admin-panel">
//           <h3>Admin Panel</h3>

//           <input
//             name="name"
//             placeholder="Sweet name"
//             value={formData.name}
//             onChange={handleChange}
//           />

//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//           >
//             <option value="Chocolate">Chocolate</option>
//             <option value="Traditional">Traditional</option>
//             <option value="Bakery">Bakery</option>
//           </select>

//           <input
//             name="price"
//             type="number"
//             placeholder="Price"
//             value={formData.price}
//             onChange={handleChange}
//           />

//           <input
//             name="quantity"
//             type="number"
//             placeholder="Quantity"
//             value={formData.quantity}
//             onChange={handleChange}
//           />

//           <button onClick={addSweet}>Add Sweet</button>
//         </div>
//       )}

//       {/* 🔎 Search & Filter */}
//       <div className="filters">
//         <input
//           type="text"
//           placeholder="Search sweets..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="">All Categories</option>
//           <option value="Chocolate">Chocolate</option>
//           <option value="Traditional">Traditional</option>
//           <option value="Bakery">Bakery</option>
//         </select>
//       </div>

//       {/* 🍬 Sweets Grid */}
//       <div className="sweets-grid">
//         {filteredSweets.map((sweet) => (
//           <div key={sweet._id} className="sweet-card">
//             <h3>{sweet.name}</h3>
//             <p className="category">{sweet.category}</p>
//             <p>₹{sweet.price}</p>
//             <p className="qty">
//               In stock: {sweet.quantity}
//             </p>

//             <button
//               disabled={sweet.quantity === 0}
//               onClick={() => purchaseSweet(sweet._id)}
//             >
//               {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
//             </button>

//             {isAdmin && (
//               <button
//                 style={{
//                   marginTop: "8px",
//                   background: "#333",
//                   color: "#fff",
//                 }}
//                 onClick={() => deleteSweet(sweet._id)}
//               >
//                 Delete
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Sweets;


