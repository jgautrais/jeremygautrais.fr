import Link from 'next/link';

const PostCard = ({ title, slug }) => {
  return (
    <Link href={`/blog/${slug}`} locale='en'>
      <a className='w-full md:w-5/12 lg:w-4/12 md:mx-2 lg:mx-4'>
        <div className='mb-8 w-full px-8 py-4 border-4 border-blue-100 dark:border-blue-900 rounded-xl'>
          <div className='flex flex-col md:flex-row justify-between'>
            <h4 className='text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100'>
              {title}
            </h4>
          </div>
          {/* <p className='text-gray-600 dark:text-gray-400'>{summary}</p> */}
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
