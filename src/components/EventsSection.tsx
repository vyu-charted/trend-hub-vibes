import { motion } from "framer-motion";
import { Calendar, Clock, Users, ArrowRight, Mic, BookOpen, Trophy } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Live AMA: Market Outlook Q2 2026",
    date: "Mar 12",
    time: "8PM EST",
    attendees: 342,
    type: "LIVE",
    icon: Mic,
    color: "bg-accent",
  },
  {
    id: 2,
    title: "Options Masterclass — Iron Condors",
    date: "Mar 15",
    time: "6PM EST",
    attendees: 189,
    type: "WORKSHOP",
    icon: BookOpen,
    color: "bg-secondary",
  },
  {
    id: 3,
    title: "Paper Trading Tournament — $5K Prize",
    date: "Mar 20",
    time: "All Day",
    attendees: 567,
    type: "COMPETITION",
    icon: Trophy,
    color: "bg-primary",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="border-b-2 border-foreground bg-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            UPCOMING <span className="bg-primary px-2">EVENTS</span>
          </h2>
          <button className="brutal-tag bg-card cursor-pointer flex items-center gap-1 font-heading">
            <Calendar className="h-3 w-3" /> Full Calendar
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="brutal-card p-0 flex flex-col"
            >
              <div className={`${event.color} border-b-2 border-foreground p-4 flex items-center justify-between`}>
                <span className="brutal-tag bg-card text-xs">{event.type}</span>
                <event.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-heading font-bold text-lg mb-4">{event.title}</h3>
                <div className="mt-auto space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" /> {event.attendees} attending
                  </div>
                </div>
                <button className="brutal-btn mt-5 w-full text-sm flex items-center justify-center gap-2">
                  RSVP <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
