import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8072/ecart/productservice/api/category/fetch')
            .then((response) => {
                setCategories(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError('Failed to fetch categories');
                setLoading(false);
            });
    }, []);

    return { categories, loading, error };
};

export default useFetchCategories;
