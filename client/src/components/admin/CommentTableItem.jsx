import toast from 'react-hot-toast';
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/appContext';

const CommentTableItem = ({comment , fetchComments}) => {

    const{axios} = useAppContext();

    const deleteComment = async() => {
        
        const confirm = window.confirm('Are you sure you want to delete this comment!');
        if(!confirm)return

        try {

        const { data } = await axios.post('/api/admin/delete-comment' , {id : comment._id});

        if(data.success){
          toast.success(data.message)
          await fetchComments()
        } else{
          toast.error(data.message)
        }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    const approveComment = async () => {
        try {
            const {data} = await axios.post('/api/admin/approve-comment' , {id : comment._id} )

            if(data.success){
                toast.success(data.message)
                fetchComments();
            }else{
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const {blog , createdAt , _id} = comment;
    const BlogDate = new Date(createdAt);

  return (
    <tr className='order-y  border-gray-300'>
        <td className='px-6 py-4'>
            <b className='text-gray-600 font-medium'>Blog</b> : {blog.title}
            <br /><br />
            <b className='text-gray-600 font-medium'>Name</b> : {comment.name}
            <br />
            <b className='text-gray-600 font-medium'>Comment</b> : {comment.content}
        </td>

        <td className='px-6 py-4 max-sm:hidden'>
            {BlogDate.toLocaleDateString()}
        </td>

        <td className='px-6 py-4'>
            <div className='inline-flex gap-4 items-center'>
                {!comment.isApproved ? 
                <img onClick={approveComment} src={assets.tick_icon} className='w-5 cursor-pointer hover:scale-110 transition-all'/> : <p className='text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1'>Approved</p>}

                <img onClick={deleteComment} src={assets.bin_icon} alt="delete" className='w-5 hover:scale-110 transition-all cursor-pointer' />
            </div>
        </td>
    </tr>
  )
}

export default CommentTableItem
