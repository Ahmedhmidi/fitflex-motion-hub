
import React, { useState } from 'react';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone } from 'lucide-react';
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      console.log('Form data:', formData);
      
      // In a real application, you would make a fetch request here
      // const response = await fetch('https://ahmedhmidi.app.n8n.cloud/webhook-test/FITFLEX', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Votre message a été envoyé avec succès! Nous vous contacterons rapidement.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Une erreur s'est produite. Veuillez réessayer plus tard.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div>
      <HeroSection
        title="Contactez-Nous"
        subtitle="Des questions? Nous sommes à votre écoute"
        backgroundImage="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
        overlayOpacity="opacity-60"
      />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Nous Contacter"
            subtitle="Prenez contact avec notre équipe pour toute question ou réservation"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-serif font-bold mb-6">Informations de Contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-fitflex-tan mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Adresse</p>
                      <p className="text-gray-600">123 Rue du Fitness, 75000 Paris, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-fitflex-tan mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Téléphone</p>
                      <p className="text-gray-600">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-fitflex-tan mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-gray-600">contact@fitflex.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-serif font-bold mb-4">Horaires d'Ouverture</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Lundi - Vendredi</span>
                      <span className="font-medium">6h00 - 22h00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Samedi</span>
                      <span className="font-medium">8h00 - 20h00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Dimanche</span>
                      <span className="font-medium">9h00 - 18h00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-serif font-bold mb-6">Envoyez-nous un Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom Complet</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Votre email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Votre numéro de téléphone"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Le sujet de votre message"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message"
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-fitflex-tan hover:bg-fitflex-tan/90 text-fitflex-black"
                    disabled={isLoading}
                  >
                    {isLoading ? "Envoi en cours..." : "Envoyer"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-serif font-bold mb-6 text-center">Notre Emplacement</h3>
            
            <div className="rounded-lg overflow-hidden h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410699747!2d2.264634087479693!3d48.85883773936325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1686238335406!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="FITFLEX location map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
