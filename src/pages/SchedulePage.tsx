
import React, { useState } from 'react';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/button';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data for the schedule
const scheduleData = {
  Monday: [
    { time: "08:00 - 09:00", class: "Pilates Mat", coach: "Sarah Martin", room: "Salle des cours", slots: 4 },
    { time: "10:00 - 11:00", class: "Renforcement", coach: "Hamza Hmidi", room: "Salle coaching", slots: 0 },
    { time: "17:00 - 18:00", class: "HIIT", coach: "Thomas Dubois", room: "Salle des cours", slots: 2 },
    { time: "19:00 - 20:00", class: "Pilates Reformer", coach: "Sarah Martin", room: "Salle coaching", slots: 5 },
  ],
  Tuesday: [
    { time: "09:00 - 10:00", class: "Core Training", coach: "Léa Durand", room: "Salle des cours", slots: 6 },
    { time: "12:00 - 13:00", class: "Circuit Training", coach: "Hamza Hmidi", room: "Salle coaching", slots: 3 },
    { time: "18:00 - 19:00", class: "Stretching", coach: "Sarah Martin", room: "Salle des cours", slots: 8 },
  ],
  Wednesday: [
    { time: "08:00 - 09:00", class: "Pilates Mat", coach: "Sarah Martin", room: "Salle des cours", slots: 4 },
    { time: "11:00 - 12:00", class: "ABDO", coach: "Thomas Dubois", room: "Salle coaching", slots: 0 },
    { time: "17:30 - 18:30", class: "BALANCE", coach: "Léa Durand", room: "Salle des cours", slots: 5 },
  ],
  Thursday: [
    { time: "10:00 - 11:00", class: "Pilates Reformer", coach: "Sarah Martin", room: "Salle coaching", slots: 4 },
    { time: "12:00 - 13:00", class: "Circuit Training", coach: "Hamza Hmidi", room: "Salle des cours", slots: 2 },
    { time: "19:00 - 20:00", class: "HIIT", coach: "Thomas Dubois", room: "Salle coaching", slots: 0 },
  ],
  Friday: [
    { time: "09:00 - 10:00", class: "Core Training", coach: "Léa Durand", room: "Salle des cours", slots: 5 },
    { time: "12:00 - 13:00", class: "Renforcement", coach: "Hamza Hmidi", room: "Salle coaching", slots: 3 },
    { time: "18:00 - 19:00", class: "Stretching", coach: "Sarah Martin", room: "Salle des cours", slots: 7 },
  ],
  Saturday: [
    { time: "10:00 - 11:00", class: "Pilates Mat", coach: "Sarah Martin", room: "Salle des cours", slots: 8 },
    { time: "12:00 - 13:00", class: "ABDO", coach: "Thomas Dubois", room: "Salle coaching", slots: 5 },
  ],
  Sunday: [
    { time: "10:00 - 11:00", class: "BALANCE", coach: "Léa Durand", room: "Salle des cours", slots: 10 },
  ]
};

const SchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [roomFilter, setRoomFilter] = useState("all-rooms");
  const [coachFilter, setCoachFilter] = useState("all-coaches");
  const [classFilter, setClassFilter] = useState("all-classes");
  
  // Get unique filters
  const rooms = [...new Set(Object.values(scheduleData).flat().map(item => item.room))];
  const coaches = [...new Set(Object.values(scheduleData).flat().map(item => item.coach))];
  const classes = [...new Set(Object.values(scheduleData).flat().map(item => item.class))];
  
  // Filter the schedule data
  const filteredSchedule = scheduleData[selectedDay as keyof typeof scheduleData].filter(item => {
    return (
      (roomFilter === "all-rooms" || item.room === roomFilter) &&
      (coachFilter === "all-coaches" || item.coach === coachFilter) &&
      (classFilter === "all-classes" || item.class === classFilter)
    );
  });
  
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const handleReservation = (dayIndex: number, classIndex: number) => {
    console.log(`Reserved class at day ${dayIndex}, class ${classIndex}`);
    // In a real application, we would update the state and make an API call here
  };

  return (
    <div>
      <HeroSection
        title="Planning des Cours"
        subtitle="Consultez et réservez vos séances"
        backgroundImage="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80"
        overlayOpacity="opacity-70"
      />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Planning Hebdomadaire"
            subtitle="Trouvez le cours qui vous convient et réservez votre place"
          />
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
            <Tabs defaultValue="Monday" onValueChange={setSelectedDay}>
              <TabsList className="grid grid-cols-7 mb-8">
                {weekdays.map(day => (
                  <TabsTrigger key={day} value={day} className="font-medium">
                    {day.substring(0, 3)}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2">Salle</label>
                  <Select value={roomFilter} onValueChange={setRoomFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Toutes les salles" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-rooms">Toutes les salles</SelectItem>
                      {rooms.map(room => (
                        <SelectItem key={room} value={room}>{room}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Coach</label>
                  <Select value={coachFilter} onValueChange={setCoachFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Tous les coachs" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-coaches">Tous les coachs</SelectItem>
                      {coaches.map(coach => (
                        <SelectItem key={coach} value={coach}>{coach}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Cours</label>
                  <Select value={classFilter} onValueChange={setClassFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Tous les cours" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-classes">Tous les cours</SelectItem>
                      {classes.map(className => (
                        <SelectItem key={className} value={className}>{className}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {weekdays.map(day => (
                <TabsContent key={day} value={day}>
                  {filteredSchedule.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Horaire</TableHead>
                          <TableHead>Cours</TableHead>
                          <TableHead>Coach</TableHead>
                          <TableHead>Salle</TableHead>
                          <TableHead>Places</TableHead>
                          <TableHead className="text-right">Réservation</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredSchedule.map((session, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{session.time}</TableCell>
                            <TableCell>{session.class}</TableCell>
                            <TableCell>{session.coach}</TableCell>
                            <TableCell>{session.room}</TableCell>
                            <TableCell>
                              {session.slots === 0 ? (
                                <Badge variant="destructive">Complet</Badge>
                              ) : (
                                <Badge variant="outline">{session.slots} place{session.slots > 1 ? 's' : ''}</Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button 
                                disabled={session.slots === 0}
                                onClick={() => handleReservation(weekdays.indexOf(day), index)}
                                className="bg-fitflex-tan hover:bg-fitflex-tan/90 text-fitflex-black"
                              >
                                Réserver
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-lg text-gray-500">Aucun cours ne correspond à vos critères de filtrage.</p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Instructions */}
      <section className="py-12 bg-fitflex-beige/30 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-6 text-center">Comment Réserver?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-serif text-fitflex-tan mb-4">1</div>
                <h3 className="font-medium mb-2">Sélectionnez un Jour</h3>
                <p className="text-gray-600">Choisissez le jour qui vous convient dans notre planning hebdomadaire.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-serif text-fitflex-tan mb-4">2</div>
                <h3 className="font-medium mb-2">Filtrez les Cours</h3>
                <p className="text-gray-600">Utilisez les filtres pour trouver facilement les cours qui vous intéressent.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-serif text-fitflex-tan mb-4">3</div>
                <h3 className="font-medium mb-2">Réservez Votre Place</h3>
                <p className="text-gray-600">Cliquez sur "Réserver" pour confirmer votre participation au cours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
