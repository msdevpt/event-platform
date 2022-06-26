import { Event } from './pages/event';
import { Subscribe } from './pages/Subscribe';
import { Route, Routes } from 'react-router-dom';

export function Router(){
  return (
    <Routes>
      <Route path='/' element={<Subscribe />} />
      <Route path='/event' element={<Event />} />
      <Route path='/event/lesson/:slug' element={<Event />} />
    </Routes>
  )
}