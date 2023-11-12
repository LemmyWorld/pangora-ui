import { PostView } from 'lemmy-js-client'
import {
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react'
import {
  getPostSource,
  getPostTitle,
  getPostURL,
} from '@/shared/libs/Lemmy/post'
import PinIcon from '@/icons/PinIcon'

export function PostFeedPostCollapsedTitle({
  post,
  setPreview,
}: {
  post: PostView
  setPreview: (post: PostView) => void
}) {
  return (
    <div className="flex gap-1 items-center">
      <Link
        onClick={() => setPreview(post)}
        className={`text-transparent bg-clip-text bg-gradient-to-r text-xs hover:cursor-pointer ${
          post.post.featured_community
            ? 'from-green-400 to-teal-500'
            : 'from-default-600 to-default-500'
        }`}
      >
        {getPostTitle(post)}
      </Link>
      {getPostURL(post) && (
        <Link href={getPostURL(post)} className="text-[0.6em] text-blue-800">
          <p>({getPostSource(post)})</p>
        </Link>
      )}
      {post.post.featured_community && (
        <Popover>
          <PopoverTrigger>
            <div className="text-teal-500 hover:cursor-pointer">
              <PinIcon width={18} />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <p>This post has been pinned to the top of the community</p>
          </PopoverContent>
        </Popover>
      )}
    </div>
  )
}
