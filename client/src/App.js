import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [activeTab, setActiveTab] = useState('submit');
  const [refresh, setRefresh] = useState(false);

  const handleProductAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-4">Mini E-Commerce</h1>

      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${activeTab === 'submit' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('submit')}
        >
          Product Submission
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'products' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('products')}
        >
          My Products
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        {activeTab === 'submit' && <ProductForm onProductAdded={handleProductAdded} />}
        {activeTab === 'products' && <ProductList refresh={refresh} />}
      </div>
    </div>
  );
}

export default App;