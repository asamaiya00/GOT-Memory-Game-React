import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState({ data: [] });

  const clearedForm = { name: '', job: '' };
  const [form, setform] = useState(clearedForm);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState('');

  const history = useHistory();

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      history.push('/login');
    }

    const getUsers = async () => {
      const { data } = await Axios.get(`/api/unknown`);
      //   console.log(data);
      setUsers(data);
    };
    getUsers();
  }, []);

  function handleChange(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  function handleForm(e) {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    Axios.post('/api/users', form)
      .then((res) => {
        setUsers({ ...users, data: [...users.data, { name: res.data.name }] });
        setform(clearedForm);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.error);
      });
  }

  return (
    <div>
      {users.data.map((user, id) => (
        <section key={id}>
          <div className="flex justify-center">
            <p className="mx-2 text-2xl">{user.name}</p>
          </div>
        </section>
      ))}

      <form
        className=" flex my-10 justify-center bg-gray-200 rounded shadow "
        onSubmit={handleForm}
      >
        <div className="p-2 flex justify-center">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 border border-gray-800 my-4"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="p-2 flex justify-center">
          <input
            type="text"
            name="job"
            placeholder="Enter your job"
            className="p-2 border border-gray-800 my-4"
            value={form.job}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            className={`w-32 mt-6 h-10 text-white bg-orange-500  ${
              isLoading ? 'bg-blue-400' : 'bg-blue-700'
            } `}
            disabled={isLoading}
          >
            {isLoading ? (
              <i className="fas fa-circle-notch fa-spin"> </i>
            ) : (
              'Add'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Users;
