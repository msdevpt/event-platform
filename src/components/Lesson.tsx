import { isPast, format } from 'date-fns';
import ptPT from 'date-fns/locale/pt';
import { CheckCircle, Lock } from 'phosphor-react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
  title: string,
  slug: string,
  availableAt: Date,
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps){
  const { slug } = useParams();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE '•' dd 'de' MMMM '•' HH'h'mm",{
    locale: ptPT
  });

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>
      
      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
        'bg-green-500': isActiveLesson
        })}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames('text-sm font-medium flex items-center gap-2', {
              'text-blue-500': !isActiveLesson,
              'text-white': isActiveLesson,
            })}>
              <CheckCircle size={20} />
              Released content
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Soon
            </span>
          )}
          <span className={classNames('text-xs rounded px-2 py-[0.125rem] text-white border font-bold', {
            'border-green-300': !isActiveLesson,
            'border-white': isActiveLesson,
          })}>
            {props.type === 'live' ? 'LIVE' : 'CLASS'}
          </span>
        </header>

        <strong className={classNames('mt-5 block',{
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson
        })}>
          {props.title}
        </strong>
      </div>
    </Link>

  )
}