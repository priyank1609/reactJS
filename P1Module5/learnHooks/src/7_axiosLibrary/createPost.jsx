import axios from 'axios';
import {useForm} from '../6_customHook/useForm';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import WrapperReactQuery from '../8_learnReactQuery/wrapperReactQuery';

const CreatePost = () => {
    const queryClient = useQueryClient();
    const {mutateAsync, data, isPending, error} = useMutation({
        mutationFn: sendPostToBackend,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["posts"]
            })
        }
    });
    const { register, handleFormSubmit } = useForm({
        initialValues: {
            title: "",
            body: ""
        },
        onSubmit
    });

    async function sendPostToBackend(data) {
        const response = await axios.post("https://dummyjson.com/posts/add", {...data,userId:5, id:23423});
        return response.data;
    }
    function onSubmit(formData) {
        console.log(formData);
        mutateAsync(formData);
    }

    if(error) {
        return <p>Error: {error}</p>
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Title
                    <input type="text" {...register("title")} />
                </label>

                <label>
                    Body
                    <input type="text" {...register("body")} />
                </label>

                <button>Submit</button>
            </form>
            <WrapperReactQuery />
        </div>
    )
}

export default CreatePost
