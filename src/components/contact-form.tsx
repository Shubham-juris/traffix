
"use client";

import { useFormStatus } from "react-dom";
import { useActionState, useEffect, useRef, useState } from "react";
import { submitCarrierForm, type State } from "@/actions/contact";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";




function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-10 py-3 text-lg font-bold w-auto">
      {pending ? "SUBMITTING..." : "SUBMIT"}
    </Button>
  );
}

const FormInput = ({ name, label, type = "text", required = true, error, placeholder }: { name: string, label: string, type?: string, required?: boolean, error?: string[], placeholder?: string }) => (
  <div className="space-y-2">
    <Label htmlFor={name} className="font-bold text-gray-300">{label}{required && '*'}</Label>
    <Input id={name} name={name} type={type} required={required} className="bg-gray-200 text-black border-none rounded-md py-3 px-4 focus:ring-2 focus:ring-primary" placeholder={placeholder} />
    {error && <p className="text-destructive text-sm mt-1">{error[0]}</p>}
  </div>
);

export function CarrierForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, dispatch] = useActionState(submitCarrierForm, null);
  const { toast } = useToast();
  const [country, setCountry] = useState("USA");

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
          variant: "default",
        });
        formRef.current?.reset();
        setCountry("USA");
      } else if (state.errors && Object.keys(state.errors).length > 0) {
        toast({
          title: "Error submitting form",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={dispatch} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput name="firstName" label="First Name" error={state?.errors?.firstName} />
        <FormInput name="lastName" label="Last Name" error={state?.errors?.lastName} />
      </div>
      <FormInput name="position" label="Position" error={state?.errors?.position} />
      <FormInput name="email" label="Email" type="email" error={state?.errors?.email} />
      <FormInput name="confirmEmail" label="Confirm Email" type="email" error={state?.errors?.confirmEmail} />
      <FormInput name="companyName" label="Company Name" error={state?.errors?.companyName} />
      <FormInput name="companyPhone" label="Company Phone" type="tel" error={state?.errors?.companyPhone} />
      <FormInput name="companyAddress" label="Company Address" error={state?.errors?.companyAddress} />
      <FormInput name="companyWebsite" label="Company Website" required={false} error={state?.errors?.companyWebsite} />
      
      <div className="space-y-2">
        <Label htmlFor="country" className="font-bold text-gray-300">Country*</Label>
        <Select name="country" defaultValue="USA" onValueChange={setCountry}>
          <SelectTrigger id="country" className="bg-gray-200 text-black border-none rounded-md py-3 px-4 focus:ring-2 focus:ring-primary h-auto">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USA">USA</SelectItem>
            <SelectItem value="Canada">Canada</SelectItem>
            <SelectItem value="Mexico">Mexico</SelectItem>
          </SelectContent>
        </Select>
        {state?.errors?.country && <p className="text-destructive text-sm mt-1">{state.errors.country[0]}</p>}
      </div>

      {country === 'USA' && (
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-gray-200 mt-4">USA</h3>
          <FormInput name="mcNumber" label="MC #" required={false} error={state?.errors?.mcNumber} />
          <FormInput name="usDotNumber" label="US DOT #" required={false} error={state?.errors?.usDotNumber} />
        </div>
      )}

      <div className="space-y-4">
         <div className="flex items-center space-x-2">
            <Checkbox id="ctpat" name="ctpat" className="border-gray-300" />
            <Label htmlFor="ctpat" className="font-medium text-gray-300">CTPAT</Label>
         </div>
         <div className="flex items-center space-x-2">
            <Checkbox id="smartway" name="smartway" className="border-gray-300" />
            <Label htmlFor="smartway" className="font-medium text-gray-300">Smartway</Label>
         </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="comments" className="font-bold text-gray-300">Comments</Label>
        <Textarea id="comments" name="comments" rows={5} className="bg-gray-200 text-black border-none rounded-md py-3 px-4 focus:ring-2 focus:ring-primary" />
        {state?.errors?.comments && <p className="text-destructive text-sm mt-1">{state.errors.comments[0]}</p>}
      </div>

      <div className="space-y-4">
        <Label className="font-bold text-gray-300">Consent*</Label>
        <div className="flex items-start space-x-2">
            <Checkbox id="consent" name="consent" required className="mt-1 border-gray-300" />
            <Label htmlFor="consent" className="text-sm text-gray-400">By checking this box, I agree to receive marketing emails from TRAFFICOLOGY LOGISTICS about their latest products, services, and offers. I understand that I can unsubscribe at any time by following the instructions in the emails.*</Label>
        </div>
        {state?.errors?.consent && <p className="text-destructive text-sm mt-1">{state.errors.consent[0]}</p>}
      </div>
      
      <SubmitButton />
    </form>
  );
}
