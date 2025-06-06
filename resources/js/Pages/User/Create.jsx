import InputLabel from '@/Components/InputLabel';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function Create({ auth, translations }) {
  const { data, setData, post, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const onSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    if (data.image) {
      formData.append('image', data.image);
    }
    formData.append('name', data.name);
    formData.append('status', data.status);
    formData.append('description', data.description);
    formData.append('due_date', data.due_date);

    post(route('user.store'), {
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    console.log(translations);

  };

  return (
    <AuthenticatedLayout user={auth.user} header={
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          {/* Create new User */} {translations.create_title}
        </h2>
      </div>
    }>
      {/* <Head title="New User" /> */}
      <Head title={translations.new_user} />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <form onSubmit={onSubmit} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">            
                
                <div className="mt-4">
                  <InputLabel htmlFor="user_name" value={translations.name}  /> {/*value="User Name"*/}
                  <TextInput 
                    id="user_name" 
                    type="text"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData("name", e.target.value)}
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                  <InputLabel htmlFor="user_email" value={translations.email} /> {/*value="User Email"*/}
                  <TextInput 
                    id="user_email" 
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("email", e.target.value)}
                  />
                  <InputError message={errors.email} className="mt-2" />
                </div>      

                 <div className="mt-4">
                  <InputLabel htmlFor="user_password" value={translations.password} /> {/*value="User Password"*/}
                  <TextInput 
                    id="user_password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("password", e.target.value)}
                  />
                  <InputError message={errors.password} className="mt-2" />
                </div> 

                <div className="mt-4">
                  <InputLabel htmlFor="user_password_confirmation" value={translations.confirmation_password} /> {/*value="Confirmation Password"*/}
                  <TextInput 
                    id="user_password_confirmation"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("password_confirmation", e.target.value)}
                  />
                  <InputError message={errors.password_confirmation} className="mt-2" />
                </div>              

                <div className="mt-4 text-right">
                  <Link href={route('user.index')} className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">
                    {/* Cancel */} {translations.cancel}
                  </Link>
                  <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                    {/* Submit */} {translations.submit}
                  </button>
                </div>
              </form>
            </div>  
          </div>                
        </div>                
      </div>                
    </AuthenticatedLayout>
  );
}

