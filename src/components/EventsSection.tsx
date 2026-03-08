import { motion } from "framer-motion";
import { Calendar, Clock, Users, ArrowRight, Mic, BookOpen, Trophy } from "lucide-react";

const events = [
  { id: 1, title: "Live AMA: Market Outlook Q2 2026", date: "Mar 12", time: "8PM EST", attendees: 342, type: "Live", icon: Mic, color: "bg-accent/10 text-accent" },
  { id: 2, title: "Options Masterclass — Iron Condors", date: "Mar 15", time: "6PM EST", attendees: 189, type: "Workshop", icon: BookOpen, color: "bg-secondary/10 text-secondary" },
  { id: 3, title: "Paper Trading Tournament — $5K Prize", date: "Mar 20", time: "All Day", attendees: 567, type: "Competition", icon: Trophy, color: "bg-primary/10 text-primary" },
];

const EventsSection = () => {
  return (
    <section id="events">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Upcoming Events
          </h2>
          <button className="soft-tag bg-card border border-border text-muted-foreground cursor-pointer flex items-center gap-1 hover:text-primary transition-colors">
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
              className="soft-card p-0 flex flex-col overflow-hidden"
            >
              <div className="p-5 flex items-center justify-between border-b border-border">
                <span className={`soft-tag ${event.color}`}>{event.type}</span>
                <div className={`rounded-lg p-2 ${event.color}`}>
                  <event.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">{event.title}</h3>
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
                <button className="soft-btn mt-5 w-full text-sm flex items-center justify-center gap-2">
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
