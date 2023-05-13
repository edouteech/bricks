import { Image, Text, types } from 'react-bricks'

//=============================
// Local Types
//=============================
interface ConversationProps {
  name: string
  imageSrc: string
  imageAlt: string
  message: string
  messageCount: number
}

//=============================
// Component to be rendered
//=============================
const Conversation: types.Brick<ConversationProps> = ({
  name,
  imageSrc,
  imageAlt,
  message,
  messageCount,
}) => {
  return (
    <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
      <div className="flex-shrink-0">
        <Image
        //   src={imageSrc}
          alt={imageAlt}
          aspectRatio={1}
          imageClassName="h-10 w-10 rounded-full"
          propName="imageSrc"
        />
      </div>
      <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <Text
              renderBlock={(props) => (
                <p className="text-sm font-bold text-blue-500">{props.children}</p>
              )}
              placeholder="Type a name..."
              propName="name"
            />
            <div className="text-gray-400 text-xs">12:33 AM</div>
          </div>
          <div className="flex items-center justify-between">
            <Text
              renderBlock={(props) => (
                <p className="text-sm text-gray-500 truncate">{props.children}</p>
              )}
              placeholder="Type a message..."
              propName="message"
            />
            <div className="text-white text-xs bg-blue-400 rounded-full px-1 py-0">
              {messageCount}
            </div>
          </div>
      </div>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
Conversation.schema = {
  name: 'conversation',
  label: 'Conversation',
  getDefaultProps: () => ({
    name: 'John Doe',
    imageSrc: '',
    imageAlt: 'Profile image',
    message: 'Hello there!',
    messageCount: 1,
  }),
}

export default Conversation
