import { motion } from "framer-motion";
import { Calendar, Clock, Users, ArrowRight, Mic, BookOpen, Trophy } from "lucide-react";

const events = [
  { id: 1, title: "Live AMA: Market Outlook Q2 2026", date: "Mar 12", time: "8PM EST", attendees: 342, type: "Live", icon: Mic, color: "primary" },
  { id: 2, title: "Options Masterclass — Iron Condors", date: "Mar 15", time: "6PM EST", attendees: 189, type: "Workshop", icon: BookOpen, color: "secondary" },
  { id: 3, title: "Paper Trading Tournament — $5K Prize", date: "Mar 20", time: "All Day", attendees: 567, type: "Competition", icon: Trophy, color: "accent" },
];

const EventsSection = () => {
  return (
    <section id="events" className="relative">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider">
            <span className="text-primary">//</span> Upcoming Events
          </h2>
          <button className="cyber-tag bg-muted text-muted-foreground border border-border cursor-pointer flex items-center gap-1 hover:text-primary hover:border-primary/50 transition-all">
            <Calendar className="h-3 w-3" /> Full Schedule
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
              className="cyber-card p-0 flex flex-col overflow-hidden"
            >
              <div className={`p-5 flex items-center justify-between bg-${event.color}/10 border-b border-border`}>
                <span className={`cyber-tag bg-${event.color}/20 text-${event.color} border border-${event.color}/30`}>{event.type}</span>
                <div className={`bg-${event.color}/10 border border-${event.color}/30 rounded-sm p-2`}>
                  <event.icon className={`h-5 w-5 text-${event.color}`} />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-heading font-semibold text-sm md:text-base mb-4 tracking-wide uppercase">{event.title}</h3>
                <div className="mt-auto space-y-2 text-sm text-muted-foreground font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" /> {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" /> {event.attendees} registered
                  </div>
                </div>
                <button className="cyber-btn mt-5 w-full text-xs flex items-center justify-center gap-2">
                  Register <ArrowRight className="h-4 w-4" />
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
