import { motion } from "framer-motion";
import { Calendar, Clock, Users, ArrowRight, Mic, BookOpen, Trophy } from "lucide-react";

const events = [
  { id: 1, title: "Live AMA: Market Outlook Q2 2026", date: "Mar 12", time: "8PM EST", attendees: 342, type: "Live", icon: Mic },
  { id: 2, title: "Options Masterclass — Iron Condors", date: "Mar 15", time: "6PM EST", attendees: 189, type: "Workshop", icon: BookOpen },
  { id: 3, title: "Paper Trading Tournament — $5K Prize", date: "Mar 20", time: "All Day", attendees: 567, type: "Competition", icon: Trophy },
];

const EventsSection = () => {
  return (
    <section id="events" className="relative">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Upcoming Events
          </h2>
          <button className="organic-tag bg-muted text-muted-foreground cursor-pointer flex items-center gap-1 hover:text-foreground hover:bg-primary/10 transition-all">
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
              transition={{ delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="organic-card p-0 flex flex-col overflow-hidden"
            >
              <div className="p-5 flex items-center justify-between bg-primary/8">
                <span className="organic-tag bg-primary/15 text-primary">{event.type}</span>
                <div className="bg-primary/10 rounded-2xl p-2">
                  <event.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-heading font-semibold text-lg mb-4">{event.title}</h3>
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
                <button className="organic-btn mt-5 w-full text-sm flex items-center justify-center gap-2">
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
