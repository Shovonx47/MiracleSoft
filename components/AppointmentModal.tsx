import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaClock, FaGlobeAsia, FaArrowLeft } from 'react-icons/fa';
import logo from "../assets/logo/Miracle.png";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Swal from 'sweetalert2';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimezone, setSelectedTimezone] = useState('Asia/Dhaka');
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notes: ''
  });

  useEffect(() => {
    if (selectedDate) {
      const slots = [];
      const startHour = 9;
      let count = 0;
      
      for (let hour = startHour; count < 5; hour++) {
        const time = new Date(selectedDate);
        time.setHours(hour, 0, 0);
        slots.push(time.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        }));
        count++;
      }
      setTimeSlots(slots);
      setSelectedTimeSlot(null);
    }
  }, [selectedDate]);

  if (!isOpen) return null;

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const formatSelectedDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleNextClick = () => {
    setShowForm(true);
  };

  const handleBackClick = () => {
    setShowForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSchedule = () => {
    if (selectedDate && selectedTimeSlot) {
      const formattedDate = formatSelectedDate(selectedDate);
      Swal.fire({
        icon: 'success',
        title: 'Meeting Scheduled!',
        text: `Your meeting has been fixed on ${formattedDate} at ${selectedTimeSlot}.`,
        confirmButtonColor: '#3b82f6'
      }).then(() => {
        onClose();
      });
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-6xl w-full mx-4 overflow-hidden h-[600px]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side */}
          <div className="w-full md:w-2/5 p-8 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 h-full">
            <div className="flex flex-col items-start">
              <Image
                src={logo}
                alt="MiracleSoft Logo"
                width={100}
                height={100}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                MiracleSoft
              </h2>
              <h3 className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                30 Minute Meeting
              </h3>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <FaClock className="mr-2" />
                <span>30 min</span>
              </div>
            </div>
          </div>

          {/* Right Side - Calendar or Form */}
          <div className="w-full md:w-3/5 p-8 h-full">
            {!showForm ? (
              <div className="h-full flex">
                {/* Original Calendar View */}
                <div className="w-1/2">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                      Select a Date & Time
                    </h2>
                  </div>
                  
                  <Calendar
                    className="dark:text-white"
                    tileClassName={({ date, view }) => 
                      `${date.getDay() === 5 || date < new Date().setHours(0, 0, 0, 0) ? 'opacity-50' : ''}
                      hover:!rounded-full active:!rounded-full focus:!rounded-full`
                    }
                    view="month"
                    minDate={new Date()}
                    tileDisabled={({ date }) => {
                      return date.getDay() === 5 || date < new Date().setHours(0, 0, 0, 0);
                    }}
                    onChange={handleDateChange}
                    value={selectedDate}
                  />
                  <style jsx global>{`
                    /* Base calendar styles */
                    .react-calendar {
                      background-color: transparent !important;
                      border: none !important;
                    }

                    /* Navigation (month/year) and weekday styles */
                    .react-calendar__navigation button,
                    .react-calendar__month-view__weekdays__weekday {
                      color: #1a1a1a !important;
                    }
                    .dark .react-calendar__navigation button,
                    .dark .react-calendar__month-view__weekdays__weekday {
                      color: #ffffff !important;
                    }
                    
                    /* Remove weekday abbreviation styling */
                    .react-calendar__month-view__weekdays__weekday abbr {
                      text-decoration: none !important;
                      font-weight: 600 !important;
                    }

                    /* Regular date tiles */
                    .react-calendar__tile {
                      border-radius: 50% !important;
                      aspect-ratio: 1 !important;
                      display: flex !important;
                      align-items: center !important;
                      justify-content: center !important;
                      padding: 0.75em 0.5em !important;
                      color: #1a1a1a !important;
                      font-weight: 500 !important;
                    }
                    .dark .react-calendar__tile {
                      color: #ffffff !important;
                    }

                    /* Active date (selected) */
                    .react-calendar__tile--active,
                    .react-calendar__tile--active:enabled:hover,
                    .react-calendar__tile--active:enabled:focus {
                      border-radius: 50% !important;
                      background: #006edc !important;
                      color: white !important;
                    }
                    .dark .react-calendar__tile--active,
                    .dark .react-calendar__tile--active:enabled:hover,
                    .dark .react-calendar__tile--active:enabled:focus {
                      background: #3b82f6 !important;
                    }

                    /* Hover and focus states */
                    .react-calendar__tile:enabled:hover,
                    .react-calendar__tile:enabled:focus {
                      border-radius: 50% !important;
                      background: #e6e6e6 !important;
                    }
                    .dark .react-calendar__tile:enabled:hover,
                    .dark .react-calendar__tile:enabled:focus {
                      background: #374151 !important;
                    }

                    /* Current date */
                    .react-calendar__tile--now {
                      border-radius: 50% !important;
                      background: #ffeb3b33 !important;
                      color: #1a1a1a !important;
                    }
                    .dark .react-calendar__tile--now {
                      background: #ffeb3b1a !important;
                      color: #ffffff !important;
                    }

                    /* Navigation arrows */
                    .react-calendar__navigation button:enabled:hover,
                    .react-calendar__navigation button:enabled:focus {
                      background-color: #e6e6e6 !important;
                    }
                    .dark .react-calendar__navigation button:enabled:hover,
                    .dark .react-calendar__navigation button:enabled:focus {
                      background-color: #374151 !important;
                    }

                    /* Disabled dates */
                    .react-calendar__tile:disabled {
                      background-color: transparent !important;
                      opacity: 0.5 !important;
                    }
                    .dark .react-calendar__tile:disabled {
                      opacity: 0.3 !important;
                    }
                  `}</style>

                  {/* Timezone Selector */}
                  <div className="mt-6">
                    <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <FaGlobeAsia className="mr-2" />
                      Time Zone
                    </label>
                    <select
                      value={selectedTimezone}
                      onChange={(e) => setSelectedTimezone(e.target.value)}
                      className="block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700 dark:text-gray-200"
                    >
                      <option value="Asia/Dhaka">Bangladesh (GMT+6)</option>
                      {Intl.supportedValuesOf('timeZone')
                        .filter(tz => tz !== 'Asia/Dhaka')
                        .map((timezone) => (
                          <option key={timezone} value={timezone}>
                            {timezone.replace(/_/g, ' ')}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                {/* Time Slots Section */}
                {selectedDate && (
                  <div className="w-1/2 pl-8">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                      {formatSelectedDate(selectedDate)}
                    </h3>
                    <div className="space-y-3">
                      {timeSlots.map((time, index) => (
                        <div key={index} className="relative">
                          {selectedTimeSlot === time ? (
                            <div className="flex space-x-2">
                              <button
                                className="flex-grow text-left px-4 py-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg border-2 border-blue-500 dark:border-blue-400 text-blue-800 dark:text-blue-100 font-medium"
                              >
                                {time}
                              </button>
                              <button
                                onClick={handleNextClick}
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                              >
                                Next
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setSelectedTimeSlot(time)}
                              className="w-full text-left px-4 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 transition-colors duration-200"
                            >
                              {time}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full">
                <div className="flex items-center mb-6">
                  <button
                    onClick={handleBackClick}
                    className="mr-4 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <FaArrowLeft className="w-5 h-5" />
                  </button>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Schedule Meeting
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Please share anything that will help prepare for our meeting
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Share any additional information..."
                    />
                  </div>

                  <button
                    onClick={handleSchedule}
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                  >
                    Schedule Meeting
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
