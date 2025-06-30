'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name is required.' }),
  dob: z.date({ required_error: 'Date of birth is required.' }),
  phone: z.string().min(10, { message: 'A valid phone number is required.' }),
  canLeaveVoicemail: z.enum(['Yes', 'No'], {
    required_error: 'This field is required.',
  }),
  email: z.string().email({ message: 'A valid email address is required.' }),
  contactPreference: z.enum(['Phone', 'Email'], {
    required_error: 'Please select a preference.',
  }),
  availability: z
    .string()
    .min(10, { message: 'Please provide your availability.' }),
  reasonForTherapy: z.string().min(10, { message: 'This field is required.' }),
  insurance: z.string().optional(),
  referralSource: z.string().optional(),
});

export function ConsultationForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      availability: '',
      reasonForTherapy: '',
      insurance: '',
      referralSource: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Inquiry Sent!',
      description:
        'Thank you for reaching out. Dr. Blake will contact you within two business days.',
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Your name <span className='text-destructive'>*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='dob'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>
                Date of birth <span className='text-destructive'>*</span>
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}>
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className='w-auto p-0'
                  align='start'>
                  <Calendar
                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Phone number <span className='text-destructive'>*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='canLeaveVoicemail'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>
                Is it okay if I leave a voicemail?{' '}
                <span className='text-destructive'>*</span>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='Yes' />
                    </FormControl>
                    <FormLabel className='font-normal'>Yes</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='No' />
                    </FormControl>
                    <FormLabel className='font-normal'>No</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email address <span className='text-destructive'>*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type='email'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='contactPreference'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>
                Would you prefer to be contacted by phone or email to schedule
                the consultation? <span className='text-destructive'>*</span>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='Phone' />
                    </FormControl>
                    <FormLabel className='font-normal'>Phone</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='Email' />
                    </FormControl>
                    <FormLabel className='font-normal'>Email</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='availability'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                When is a good time to call for a free 15-minute consultation?{' '}
                <span className='text-destructive'>*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  className='resize-y min-h-[100px]'
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Provide a couple options between Mon. - Thurs 9am to 4pm
                (EASTERN TIME ZONE).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='reasonForTherapy'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                What brings you to therapy?{' '}
                <span className='text-destructive'>*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  className='resize-y min-h-[120px] md:min-h-[100px]'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='insurance'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Insurance information</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='referralSource'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Were you referred? If so, please indicate the referral source.
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          size='lg'
          className='w-full'>
          Submit
        </Button>
      </form>
    </Form>
  );
}
