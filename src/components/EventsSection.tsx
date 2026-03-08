import { motion } from "framer-motion";
import { Calendar, Clock, Users, ArrowRight, Mic, BookOpen, Trophy } from "lucide-react";

const events = [
  { id: 1, title: "Live AMA: Market Outlook Q2 2026", date: "Mar 12", time: "8PM EST", attendees: 342, type: "Live", icon: Mic, glow: "shadow-[0_0_30px_hsl(250_85%_68%/0.15)]", gradient: "from-primary to-secondary" },
  { id: 2, title: "Options Masterclass — Iron Condors", date: "Mar 15", time: "6PM EST", attendees: 189, type: "Workshop", icon: BookOpen, glow: "shadow-[0_0_30px_hsl(200_80%_60%/0.15)]", gradient: "from-secondary to-primary" },
  { id: 3, title: "Paper Trading Tournament — $5K Prize", date: "Mar 20", time: "All Day", attendees: 567, type: "Competition", icon: Trophy, glow: "shadow-[0_0_30px_hsl(320_70%_65%/0.15)]", gradient: "from-accent to-primary" },
];

const EventsSection = () => {
  return (
    <section id="events" className="relative">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Upcoming Events
          </h2>
          <button className="glass-tag bg-foreground/5 border border-foreground/10 text-muted-foreground cursor-pointer flex items-center gap-1 hover:text-foreground hover:border-foreground/20 transition-all">
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
              className={`glass-card p-0 flex flex-col overflow-hidden ${event.glow}`}
            >
              <div className={`p-5 flex items-center justify-between bg-gradient-to-r ${event.gradient} bg-opacity-10`}>
                <span className="glass-tag bg-foreground/10 text-primary-foreground border border-foreground/10 backdrop-blur-md">{event.type}</span>
                <div className="bg-foreground/10 backdrop-blur-md rounded-xl p-2 border border-foreground/10">
                  <event.icon className="h-5 w-5 text-primary-foreground" />
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
                <button className="glass-btn mt-5 w-full text-sm flex items-center justify-center gap-2">
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
