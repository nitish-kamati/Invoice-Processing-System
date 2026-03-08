package com.invoiceprocessing.server.services;

import com.invoiceprocessing.server.model.Invoice;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface InvoiceService {

    public Invoice addInvoice(Invoice invoice);

    public List<Invoice> getInvoices();

    public Invoice deleteInvoice(long id);
}
